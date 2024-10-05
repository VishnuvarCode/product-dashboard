import React, { useEffect, useState, useMemo } from "react";
import ProductList from "../components/ProductList";
import Filter from "../components/Filter";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";
import Sorting from "../components/Sorting";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategory,
  setSearchTerm,
  setSortOrder,
} from "../redux/productSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { category, searchTerm, sortOrder } = useSelector(
    (state) => state.products
  );
  
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      });
  }, []);

  // memoized filtered and sorted products
  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (category) {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortOrder === "asc") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [products, category, searchTerm, sortOrder]);

  // calculate current products based on pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="loader"></div>
      </div>
    );
  }

  if (!products) {
    return <div>Error: Products not found</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="home-page">
      <div className="top-bar ">
        <SearchBar setSearchTerm={(term) => dispatch(setSearchTerm(term))} />
        <Filter
          categories={[...new Set(products.map((product) => product.category))]}
          setCategory={(cat) => dispatch(setCategory(cat))}
        />

        {/* sorting component */}
        <Sorting setSortOrder={(order) => dispatch(setSortOrder(order))} />
      </div>

      <div className="product-list my-3">
        <ProductList products={currentProducts} />
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
        paginate={paginate}
      />
    </div>
  );
};

export default HomePage;
