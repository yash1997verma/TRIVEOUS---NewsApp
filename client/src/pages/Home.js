import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getNewsAsync } from "../redux/newsSlice"
import NewsComponent from "../components/NewsComponent";
export default  function Home() {
  const news = useSelector(state=> state.news.news);
  const newsStatus = useSelector(state=> state.news.status);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getNewsAsync());
  },[])
  return (
    <>
      {newsStatus === 'pending'&&
        <h3 className="text-center font-sans font-bold">Loading News...</h3>
      }

      {newsStatus === 'success' &&
        <div className="p-2">
        {news.map((newsItem, index)=>(
          <NewsComponent key={index} newsItem={newsItem} />
        ))}
        </div>
      }
    
    </>
    
    
  )
}
