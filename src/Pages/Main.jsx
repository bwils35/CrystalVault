import React, { Component } from "react";
import {
    Modal,
    ModalContent,
    SubmitButton,
} from "../Styles/Containers/Modal.style";
import Select from "react-select";

const submitHandler = (e) => {
    e.preventDefault();
};

const options = [
    { value: "Crystals Shit", label: "Crystals" },
    { value: "Magic", label: "Magic BS" },
    { value: "Hippy", label: "Hippy Dust" },
];

const ComboBox = () => <Select options={options} />;

function Main() {
    return (
        <>
            <div>
                <title className="title">Krystal Magic!</title>
                <main className="main">
                    Welcome to the Store.
                    <p className="par">
                        <h4>Select a Category</h4>
                        <ComboBox></ComboBox>
                        Search our products:
                        <form margin="10px" onSubmit={submitHandler}>
                            <input
                                type="text"
                                onChange={(e) => e.target.value}
                            />
                            <button classname="searchButton" type="submit">
                                Search
                            </button>
                        </form>
                    </p>
                </main>
            </div>
            <Modal>
                <ModalContent>Product Place Holder</ModalContent>
                <SubmitButton>Purchase!</SubmitButton>
            </Modal>
        </>
    );
}

export default Main;
