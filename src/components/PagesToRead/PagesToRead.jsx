import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import { getLSStoredBookList } from "../../utility/localStorage";
import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const PagesToRead = () => {
    const books = useLoaderData();

    const [readBooks, setReadBooks] = useState([]);
    useEffect(() => {
        const storedBookIds = getLSStoredBookList("read-list");
        if (books.length > 0) {
            const bookReads = books.filter((book) =>
                storedBookIds.includes(book.bookId)
            );
            setReadBooks(bookReads);
        }
    }, [books]);

    const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${
            x + width / 2
        },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
            x + width
        }, ${y + height}
  Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return (
            <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />
        );
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload;
            return (
                <div className="bg-white p-2 rounded-lg">
                    <p className="text-sm">{`Book: ${data.bookName}`}</p>
                    <p className="text-sm">{`Pages: ${data.totalPages}`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="chart-container">
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    data={readBooks}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 60,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                        dataKey="bookName" 
                        angle={-25}
                        textAnchor="end"
                        interval={0}
                        className="text-[6px] md:text-[8px] lg:text-[10px] text-balance break-words"
                    />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar
                        dataKey="totalPages"
                        fill="#8884d8"
                        shape={<TriangleBar />}
                        label={{ position: "top" }}
                    >
                        {readBooks.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={colors[index % 20]}
                            />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

PagesToRead.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
    fill: PropTypes.string,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default PagesToRead;
