const Container = ({className, children}) => {
    return (
        <div className={`w-[90%] m-auto ${className}`}>
            {children}
        </div>
    );
};

export default Container;