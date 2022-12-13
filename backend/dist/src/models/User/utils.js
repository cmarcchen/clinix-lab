import jwt from "jsonwebtoken";
export const getUser = (token) => {
    if (!token) {
        return null;
    }
    try {
        const payload = jwt.verify(token, process.env.JWT_KEY);
        return payload;
    }
    catch (err) {
        return null;
    }
};
