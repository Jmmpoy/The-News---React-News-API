import React, { useState} from 'react'
import "../style/SubMenu.scss";

export default function SubMenu({topic}) {
  const [state, setState] = useState();

  // useEffect(() => {
  //   console.log(topic);

  // }, []);

  const handleClick  = (e)  => {

    setState(e.target.value);
    console.log('le nouveau state est ' + state);
 }


    return (
      <section className="News-SubMenu">
        <ul className="News-SubMenu-Categories">
          <li>
            <button
              type="button"
              value="tech"
              onClick={handleClick}
            >
              Tech
            </button>
          </li>
          <li>
            <button
              type="button"
              value="science"
              onClick={handleClick}
            >
              Science
            </button>
          </li>
          <li>
            <button
              type="button"
              value="news"
              onClick={handleClick}
            >
              News
            </button>
          </li>
        </ul>
      </section>
    );
}
