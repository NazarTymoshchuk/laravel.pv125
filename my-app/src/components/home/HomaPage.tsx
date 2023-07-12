import {Link} from "react-router-dom";
import { ICategoryItem } from "../category/list/types";
import { useEffect, useState } from "react";
import axios from "axios";
import http_common from "../../http_common";
import ModalDelete from "../common/ModalDelete";
import { APP_ENV } from "../../env";
import { FaRegEdit } from "react-icons/fa";
import "./style.scss";

const HomePage = () => {
    const [list, setList] = useState<ICategoryItem[]>([]);

    useEffect(() => {
        axios
            .get<ICategoryItem[]>("http://laravel.pv125.com/api/category")
            .then((resp) => {
                console.log("Categories", resp.data);
                setList(resp.data);
            });
    }, []);

    const onClickDelete = async (id: number) => {
        try {
            //console.log("Видаляємо категорію", id);
            await http_common.delete(`api/category/${id}`);
            setList(list.filter(x=>x.id!==id));
        }
        catch {
            console.log("Помилка видалення");
        }
    }
    return (
        <>
            <h1>Головна сторінка</h1>
            <Link to={"/admin"} className={"btn btn-success"}>Адмін панель</Link>

            <div className="container">
                <h1 className="text-center">Список категорій</h1>
                    {list.map((c) => {
                        return (
                            <div className="card">
                                <img src={`${APP_ENV.BASE_URL}uploads/150_${c.image}`} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{c.name}</h5>
                                    <p className="card-text">{c.description}</p>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    )
}

export default HomePage;