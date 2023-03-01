import { Button, Layout } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Header: HeaderLayout } = Layout;

const Header: React.FC = () => {
    const navigate = useNavigate();
    return (
        <HeaderLayout id="layout-header">
            <div className="shape">
                <div className="circle-shape"></div>
                <div className="oval-shape"></div>
            </div>
            <div>
                <Button onClick={() => navigate('/signin')}>Sign In</Button>
            </div>
        </HeaderLayout>
    );
};

export default Header;
