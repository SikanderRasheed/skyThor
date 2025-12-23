import React, { useState } from "react";
import { Layout, Button, Drawer, Modal, Input } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
// Images
import Logo from "../../assets/images/logo.webp"

const { Header } = Layout;

const AppHeader = () => {
    const [open, setOpen] = useState(false);
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [authType, setAuthType] = useState("login")

    const menuItems = [
        { key: "1", label: "CASINO", href: "/" },
        { key: "2", label: "LIVE CASINO", href: "#tabs" },
        { key: "3", label: "SPORT BETTING", href: "/" },
        { key: "4", label: "PROMOTIONS", href: "#promotions" },
        { key: "5", label: "TOURNAMENTS", href: "#tournament" }
    ];

    return (
        <>
            <Header className="custom-header">
                <div className="header_wrapper d-flex align-items-center gap-4">
                    <Button
                        className="mobile-menu-btn"
                        icon={<MenuOutlined />}
                        onClick={() => setOpen(true)}
                    />

                    <ul className="d-flex gap-3 mb-0 d-lg-flex d-none">
                        {menuItems.map(item => (
                            <li key={item.key}>
                                <a href={item.href} className="text-white f700">{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="logo">
                        <img src={Logo} alt="Logo" />
                    </div>

                    <div className="login_btn d-lg-none d-block">
                        <Button className="login-btn" onClick={() => {
                            setAuthModalOpen(true)
                            setAuthType("login")
                        }}>
                            Login
                        </Button>
                    </div>
                </div>

                <div className="right-actions">
                    <Button className="login-btn" onClick={() => {
                        setAuthModalOpen(true)
                        setAuthType("login")
                    }}>
                        Login
                    </Button>
                    <Button className="register-btn" onClick={() => {
                        setAuthModalOpen(true)
                        setAuthType("register")
                    }}>
                        Register
                    </Button>
                    <div className="lang-icon">🌐</div>
                </div>
            </Header>

            {/* LOGIN MODAL */}
            <Modal
                open={authModalOpen}
                footer={null}
                closable={false}
                centered
                width={authType === "login" ? 420 : 700}
                className="sky-login-modal"
                onCancel={() => setAuthModalOpen(true)}
            >
                {authType === "login" ? (
                    <LoginModal
                        switchToRegister={() => setAuthType("register")}
                        closeModal={() => setAuthModalOpen(false)} />
                ) : (
                    <RegisterModal
                        switchToLogin={() => setAuthType("login")}
                        closeModal={() => setAuthModalOpen(false)}
                    />
                )}
            </Modal>


            {/* MOBILE DRAWER */}
            <Drawer open={open} onClose={() => setOpen(false)}>
                {menuItems.map(item => (
                    <li key={item.key} className="mb-4">
                        <a href={item.href} className="text-white f700">{item.label}</a>
                    </li>
                ))}
            </Drawer>
        </>
    );
};

export default AppHeader;