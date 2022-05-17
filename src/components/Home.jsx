import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";

import {
  Title,
  Images,
  HeaderContainer,
  Favorite,
  Popular,
  Neww,
  Main,
} from "./Home.style";
import img from "./images";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  // const [type, setType] = useState();

  useEffect(() => {
    // setType(img);
    dispatch({ type: "SET_PHOTOS", payload: img });
  }, []);

  const filteredImages = (category) => {
    const favoriteImages =
      category === "date"
        ? img.sort((a, b) => new Date(b.date) - new Date(a.date))
        : img.filter((item) => item[category]);
    dispatch({ type: "SET_PHOTOS", payload: favoriteImages });

    // setType(favoriteImages);
  };

  return (
    <Main>
      <HeaderContainer>
        <Title> Courses </Title>
        <Link to="/">
          <Favorite
            onClick={() => {
              dispatch({
                type: "favorite",
              });

              filteredImages("favorite");
            }}
          >
            Favorite
          </Favorite>
        </Link>
        <Link to="/">
          <Popular
            onClick={() => {
              dispatch({
                type: "popular",
              });
              filteredImages("popular");
            }}
          >
            Popular
          </Popular>
        </Link>
        <Link to="/">
          <Neww
            onClick={() => {
              dispatch({
                type: "date",
              });
              filteredImages("date");
            }}
          >
            New
          </Neww>
        </Link>
      </HeaderContainer>
      <SimpleBar style={{ height: 10000 }}>
        <Images>
          {products.photos?.map((item) => {
            return (
              <div key={item.id}>
                <img alt="" src={item.url} />
              </div>
            );
          })}
        </Images>
      </SimpleBar>
    </Main>
  );
}

export default Home;
