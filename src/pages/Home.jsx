import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Search from "../components/Search";
import "../styles/Home.scss";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FaInstagramSquare } from "react-icons/fa";
import { SiVk } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import image from "../assets/image 324.png";

const Home = ({ data, setFilteredProducts, filteredProducts }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999);
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [noProductsMessage, setNoProductsMessage] = useState("");
  const [sortMethod, setSortMethod] = useState("default");
  const [originalData, setOriginalData] = useState([]); 
  

  useEffect(() => {
    const filteredData = data.filter(
      (item) =>
        (minPrice === 0 || item.price >= minPrice) &&
        (maxPrice === 999 || item.price <= maxPrice)
    );
    setDisplayedProducts(filteredData);
    if (filteredData.length === 0) {
      setNoProductsMessage("Загрузка товаров...");
    } else {
      setNoProductsMessage("");
    }
  }, [data, minPrice, maxPrice]);

  const searchProduct = (value) => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filteredData);
  };

  useEffect(() => {
    if (sortMethod === "popular") {
      const sortedData = [...data];
      sortedData.sort((a, b) => b.rating.rate - a.rating.rate);
      setDisplayedProducts(sortedData);
    } else if (sortMethod === "default") {
      setDisplayedProducts(originalData); 
    }
  }, [data, sortMethod, originalData]);

  const handleSortChange = (e) => {
    const selectedSortMethod = e.target.value;
    setSortMethod(selectedSortMethod);
  };

  useEffect(() => {
    setOriginalData(data);
    setDisplayedProducts(data);
  }, [data]);

  return (
    <div>
      <header>
        <div className="header-bar">
          <div className="catalog-button">
            <div className="burger">
              <HiOutlineMenuAlt2 />
            </div>
            <p className="products-catalog">Каталог товаров</p>
          </div>
          <p className="menu-item">О компании</p>
          <p className="menu-item">Акции</p>
          <p className="menu-item">Хиты сезона</p>
          <p className="menu-item">Новинки</p>

          <div className="bubbles">
            <FaInstagramSquare size={40} className="insta" />
            <SiVk />
            <FaFacebook />
          </div>
          <Search searchProduct={searchProduct} />
        </div>
      </header>
      <p className="nav-bar">Главная / Бренды / Farbitex</p>
      <h3 className="farbitex">Farbitex</h3>
      <img src={image} alt="farbitex" className="imgFarbitex" />
      <p className="about">
        Представлен линейкой наиболее востребованных лакокрасочных материалов,
        выгодно отличающихся от аналогичных продуктов соотношением
        цена/качество. Грунтовки, шпатлевки, акриловые краски, алкидные эмали,
        клей и олифа, растворители, защитно-красящий состав — все эти материалы
        экономичны и практичны.
      </p>
      <p className="ourProducts">Товары Farbitex в нашем магазине</p>
      <div className="forUser">
        <div className="sort-buttons">
          <label className="sortSelect">Сортировать:</label>
          <select
          className="selectRate"
            value={sortMethod}
            onChange={handleSortChange}
          >
            <option value="default">Без сортировки</option>
            <option value="popular">По популярности</option>
          </select>
        </div>

        <div className="filter-menu">
          <div className="price-filter">
            <h3>Цена, ₽</h3>
            <div className="price-inputs">
              <Slider
                range
                min={0}
                max={999}
                value={[minPrice, maxPrice]}
                onChange={(values) => {
                  setMinPrice(values[0]);
                  setMaxPrice(values[1]);
                }}
              />
            </div>
          </div>
          <div className="windowsSale">
            <input
              type="text"
              value={minPrice === 0 ? "" : minPrice.toString()}
              onChange={(e) => {
                const value = e.target.value;
                setMinPrice(value === "" ? 0 : parseInt(value));
              }}
            />

            <p>━</p>

            <input
              type="text"
              value={maxPrice === 999 ? "" : maxPrice.toString()}
              onChange={(e) => {
                const value = e.target.value;
                setMaxPrice(value === "" ? 999 : parseInt(value));
              }}
            />
          </div>
        </div>
        <div className="products">
          {noProductsMessage ? (
            <p>{noProductsMessage}</p>
          ) : (
            displayedProducts.map((item) => {
              return <ProductCard key={item.id} {...item} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
