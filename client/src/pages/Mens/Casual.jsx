import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_SHOE_BY_CATEGORY_MENS } from "../../utils/queries";
import ShoeList from "../../components/Shoes/ShoeList";

const Casual = () => {
  const [shoeData, setShoeData] = useState([]);
  const [renderedData, setRenderedData] = useState(10);

  const { loading, data } = useQuery(QUERY_SHOE_BY_CATEGORY_MENS, {
    variables: { category: "casual" },
  });

  useEffect(() => {
    if (data) {
      setShoeData(data.searchShoeByCategoryMens);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(shoeData);

  const { _id, name, brand, price, description, images, category, stock } =
    shoeData;

    const fetchMoreData = () => {
        setTimeout(() => {
          setRenderedData((prev) => prev + 10);
        }, 1000);
      };
    
      const handleFetchMoreData = () => {
        fetchMoreData();
      };
    
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-2xl lg:text-5xl font-bold ml-14 my-10">Casual Shoes</h1>
        <ShoeList data={shoeData} renderedData={renderedData} />
        <div className="flex justify-center items-center mt-8">
            <button className="text-white bg-blue-600 px-4 py-2 rounded-2xl hover:cursor-pointer" onClick={handleFetchMoreData}>Get More Shoes</button>
        </div>
    </div>
  );
};

export default Casual;
