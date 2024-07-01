import FormReview from '@/components/FormReview'
import Testimoni from '@/components/Testimoni'
import axios from 'axios';
import  { useEffect, useState } from 'react'

const Reviews = () => {
    const [isLoading, SetisLoading] = useState(true);
    const [data, setData] = useState([]);
    // const [filterData,setFilterData]=useState()
  
    const fetchData = async () => {
      try {
        const response = await axios.get('https://668160a404acc3545a0685a8.mockapi.io/comment');
        setData(response.data);
        console.log(data)
        SetisLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    // useEffect(() => {
    //   setFilterData(data.slice(0, 6));
    // }, [data]);
  
  
  
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <>
     <FormReview fetchData={fetchData} />
      <Testimoni
        isLoading={isLoading}
        SetisLoading={SetisLoading}
        fetchData={fetchData}
        data={data}
        // filterData={filterData}
        setData={setData}
      />
    </>
  )
}

export default Reviews