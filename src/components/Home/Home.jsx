import React, { useState } from 'react'
import Card from '../Card/Card'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Modal from '../Modal/Modal';
import { FiChevronDown } from "react-icons/fi";
import "./style.css"
const Home = () => {
    const [data, setData] = useState(null);
    const [search, setSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [detail, setDetail] = useState({});
    const [filter, setFilter] = useState(false);

    const URL = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCOnrkrmuLXv_2Pd83F9NmSqypTi2W7q5c`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const resp = await fetch(URL).then((res) => res.json());
        setData(resp.items)
    };
    console.log(data);

    const handleFilter = () => {
        filter
            ? handleSubmit()
            : setData(
                []
                    .concat(data)
                    .sort(
                        (a, b) =>
                            parseInt(a.volumeInfo.publishedDate.slice(0, 4)) -
                            parseInt(b.volumeInfo.publishedDate.slice(0, 4))
                    )
            );
        setFilter(!filter);
    }
    return (
        <>
            <Header
                search={search}
                setSearch={setSearch}
                handleSubmit={handleSubmit}
            />
            {!data
                ? <div className="title" > <h1>Nothing <br />To <br />Show!?</h1></div>
                : <div className="filter" onClick={handleFilter} >Ilə görə filterlə <span><FiChevronDown /></span></div>}
            <div className="container">
                {data?.map((item) => (
                    <Card
                        key={item?.id}
                        img={item?.volumeInfo?.imageLinks?.thumbnail}
                        title={item?.volumeInfo?.title}
                        author={item?.volumeInfo?.authors}
                        setOpen={setOpen}
                        setDetail={setDetail}
                        open={open}
                        item={item}
                    />
                ))}
            </div>
            {open ? <Modal setOpen={setOpen} item={detail} /> : ""}

            <Footer />
        </>
    )
}

export default Home