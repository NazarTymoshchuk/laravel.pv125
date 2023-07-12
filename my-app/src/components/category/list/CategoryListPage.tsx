import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Delete from "../delete/Delete";
import CategoryEditPage from "../edit/CategoryEditPage";
import http_common from "../../../http_common";
import ModalDelete from "../../common/ModalDelete";
import { APP_ENV } from "../../../env";
import { ICategoryItem } from "./types";

const CategoryListPage = () => {
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
            <div className="container">
                <h1 className="text-center">Список категорій</h1>
                <Link to="create" className="btn btn-success">Додати</Link>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Назва</th>
                        <th scope="col">Фото</th>
                        <th scope="col">Опис</th>
                        <th></th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map((c) => {
                        return (
                            <tr key={c.id}>
                                <th scope="row">{c.id}</th>
                                <td>{c.name}</td>
                                <td>
                                    <img src={`${APP_ENV.BASE_URL}uploads/150_${c.image}`} alt="фото" width={50}/>
                                </td>
                                <td>{c.description}</td>
                                <td>
                                    <ModalDelete id={c.id} text={c.name} deleteFunc={onClickDelete}/>
                                </td>
                                <td>
                                    <Link to={`edit/${c.id}`} className="btn text-info" ><FaRegEdit /></Link>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default CategoryListPage;