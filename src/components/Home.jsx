import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import SimpleBar from "simplebar-react";

import {
  Title,
  Images,
  HeaderContainer,
  Favorite,
  Popular,
  Neww,
  Container,
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
    <Container>
      <HeaderContainer>
        <Title> Courses </Title>
        <Favorite
          onClick={() => {
            dispatch({
              type: "favorite",
            });

            filteredImages("favorite");
          }}
        >
          <NavLink to="/" style={{ textDecoration: "none", hover: "none" }}>
            Favorite
          </NavLink>
        </Favorite>
        <Popular
          onClick={() => {
            dispatch({
              type: "popular",
            });
            filteredImages("popular");
          }}
        >
          <NavLink to="/" style={{ textDecoration: "none" }}>
            Popular
          </NavLink>
        </Popular>

        <Neww
          onClick={() => {
            dispatch({
              type: "date",
            });
            filteredImages("date");
          }}
        >
          <NavLink to="/" style={{ textDecoration: "none" }}>
            New
          </NavLink>
        </Neww>
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
    </Container>
  );
}

export default Home;
