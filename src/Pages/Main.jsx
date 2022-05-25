import React from "react";

const submitHandler = (e) => {
    e.preventDefault();
};

function Main() {
    return (
        <>
            <div>
                <title className="title">Krystal Magic!</title>
                <main className="main">
                    Welcome to the Store.
                    <p className="par">
                        Get started by:
                        <form onSubmit={submitHandler}>
                            <input
                                type="text"
                                onChange={(e) => e.target.value}
                            />
                            <button type="submit">Search</button>
                        </form>
                    </p>
                </main>
            </div>
        </>
    );
}

export default Main;
