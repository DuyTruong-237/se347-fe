
import React,{useState,useEffect} from 'react'
import Axios from 'axios';
import { useSelector } from 'react-redux';
import Loading from '../../Loading/Loading'
import './Bill.css'
import Header from '../../Header/Header';
export default function () {
    const [billList, setBillList] = useState([])
    const user = useSelector((state) => state.auth.login?.currentUser);

    const [loading, setLoading] = useState(false)
    useEffect(() => {
        Axios.get('https://api-nodejs-daax.onrender.com/v1/bill/readBill').then((respone) => { setBillList(respone.data); setLoading(true) })
    }, [])
    const [query, setQuery] = useState("")


    return (
        <div>
            <Header/>
            <div className='billTitle'>Bill List</div>
            <table className='bill_Infor'>
            <tr className='collum'>
                            <th>IDBILL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>ADDRESS</th>
                            <th>ID TOUR</th>
                            <th>AMOUNT</th>
                            <th>TOTALBILL</th>
                            <th>ORDER DATE</th>
                            <th>STATIC</th>

                        </tr>
                {loading ? billList.map((bill, key) => {

                    const create = bill.createdAt.split("T")[0];
                    console.log(create)

                    return <tr >
                            <td>{bill._id}</td>
                            <td>{bill.userName}</td>
                            <td>{bill.email}</td>
                            <td>{bill.phoneNumber}</td>
                            <td>{bill.address}</td>
                            <td>{bill.idTour}</td>
                            <td>{bill.amount}</td>
                            <td>{bill.sumPrice}</td>
                            <td>{create}</td>
                            <td>{bill.billStatic}</td>


                        </tr>
                        
                       
                   
                }) : <Loading />}
            </table>
        </div>
    )
}
