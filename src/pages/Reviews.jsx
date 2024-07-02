import FormReview from '@/components/FormReview'
import Testimoni from '@/components/Testimoni'
import { db } from '@/config/firebase';
import axios from 'axios';
import { collection, getDocs } from 'firebase/firestore';
import  { useEffect, useState } from 'react'

const Reviews = () => {
    const [isLoading, SetisLoading] = useState(true);
    const [data, setData] = useState([]);
    // const [filterData,setFilterData]=useState()
  
    const fetchData = async () => {

      SetisLoading(true);
      try {
        const snapshot = await getDocs(collection(db, "review")); 
        const dataList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(dataList);
        SetisLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        SetisLoading(false);
      }


      // try {
      //   const response = await axios.get('https://668160a404acc3545a0685a8.mockapi.io/comment');
      //   setData(response.data);
       
      //   SetisLoading(false)
      // } catch (error) {
      //   console.error('Error fetching data:', error);
      // }
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