import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const getUsers = async () => {
    const res = await fetch("http://localhost:3000/user", {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "GET",
    });
    const data = await res.json();
    setUsers(data);
    setLoaded(true);
};