import './style.css'
const MyComponent = () => {
    // const haoTran = `Nu De Tien 1`;
    // const haoTran = {
    //     name: `Haotran`,
    //     age: `24`
    // }
    const haoTran = [1, 2, 3, 4]
    return (
        <>
            <div > {JSON.stringify(haoTran)} Hao Tran</div>
            <div>{console.log(`Haotran`)}</div>
            <div className='child' style={
                { borderRadius: `10px` }
            }>child</div>
        </>
    );
}
export default MyComponent;