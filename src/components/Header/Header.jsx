import React, { useState } from "react";
import { Layout, Button, Drawer, Modal, Input } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

const { Header } = Layout;

const AppHeader = () => {
    const [open, setOpen] = useState(false);
    const [authModalOpen, setAuthModalOpen] = useState(false);
    const [authType, setAuthType] = useState("login")

    const menuItems = [
        { key: "1", label: "CASINO", href: "/" },
        { key: "2", label: "LIVE CASINO", href: "/" },
        { key: "3", label: "SPORT BETTING", href: "/" },
        { key: "4", label: "PROMOTIONS", href: "/" },
        { key: "5", label: "TOURNAMENTS", href: "/" }
    ];

    return (
        <>
            <Header className="custom-header">
                <div className="d-flex align-items-center gap-4">
                    <ul className="d-flex gap-3 mb-0">
                        {menuItems.map(item => (
                            <li key={item.key}>
                                <a className="text-white f700">{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    <div className="logo">
                        <img src="src/assets/images/logo.webp" alt="Logo" />
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

                <Button
                    className="mobile-menu-btn"
                    icon={<MenuOutlined />}
                    onClick={() => setOpen(true)}
                />
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
                    <p key={item.key}>{item.label}</p>
                ))}
            </Drawer>
        </>
    );
};

export default AppHeader;