import React, {useContext} from "react";
import "../../style/layout.scss";
import Loader from '../Loader/Loader';
import GenericArticle from "../Navigation/GenericArticle";
import {GenericContext  } from "../../Context/GenericContext";
export default function Main() {

const {loading} = useContext(GenericContext);

  return (
    <>
     {loading ? <Loader/>: <div className="Dashboard-Container"><GenericArticle/></div>}
    </>
  );
}
