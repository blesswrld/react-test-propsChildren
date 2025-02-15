import React from "react";

import "./App.css";
import "styled-components";
import "./bootstrap.min.css";

import BootstrapTest from "./BootstrapTest";

// Компонент Wrapper оборачивает дочерние компоненты
const Wrapper = ({ children }) => {
    return (
        <div>
            <h2>Wrapper Component</h2>
            {/* Здесь отрисовываются все дочерние компоненты, переданные в Wrapper */}
            <div>{children}</div>
        </div>
    );
};

// Компонент DynamicGreating принимает пропс color и использует props.children
const DynamicGreating = (props) => {
    return (
        <div className={"mb-3 p-3 border border-" + props.color}>
            {/* Используем React.Children.map для работы с дочерними элементами */}
            {React.Children.map(props.children, (child) => {
                // Для каждого дочернего элемента клонируем его и добавляем классы
                return React.cloneElement(child, {
                    className: "shadow p-3 m-3 border rounded", // Применяем дополнительные стили
                });
            })}
        </div>
    );
};

const App = () => {
    return (
        <Wrapper>
            {/* Компонент DynamicGreating получает два дочерних элемента (h2)
            <DynamicGreating color={"primary"}>
                Эти элементы будут переданы как props.children
                <h2>Hello World!</h2>
                <h2>Here we test React-propsChildren</h2>
            </DynamicGreating> */}

            {/* Компонент BootstrapTest который включает себя дочерние элементы DynamicGreating */}
            <BootstrapTest
                // props left
                left={
                    <DynamicGreating color={"primary"}>
                        {/* Эти элементы будут переданы как props.children */}
                        <h2>Hello World!</h2>
                        <h2>Here we test React-propsChildren</h2>
                    </DynamicGreating>
                }
                // props right
                right={
                    <DynamicGreating color={"primary"}>
                        {/* Этот элемент будут переданы как props.children */}
                        <h2>RIGHT</h2>
                    </DynamicGreating>
                }
            />

            {/* Это параграф, который будет передан в Wrapper, но не в DynamicGreating */}
            <p>This is a paragraph inside the Wrapper component.</p>
            <button>Click me!</button>
        </Wrapper>
    );
};

export default App;
