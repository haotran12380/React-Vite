import './style.css'
const MyComponent = () => {
    return (
        <>
            <div >Hao Tran</div>
            <div className='child' style={
                { borderRadius: `10px` }
            }>child</div>
        </>
    );
}
export default MyComponent;