
const ModCentres = ({visibility, Close}) => {
    return(
        <section className={`${visibility ? 'absolute' : 'hidden'} w-[90vw] bg-white py-[10px] px-[15px] rounded-[20px] z-10 shadow shadow-black top-[30%] left-[5vw]`}>           
           <h1>Manage your password <ion-icon onClick={Close} size = "large" name="close-circle"></ion-icon></h1>
            <form>
                <input className="m-[8px] p-[4px] w-[80%]  border-[1px] border-[#E7DDDD] rounded-[6px]" type="password" placeholder="Input new password"/>
                <input className="m-[8px] p-[4px] w-[80%]  border-[1px] border-[#E7DDDD] rounded-[6px]" type="password" placeholder="Confirm new password"/>
                <button className=" form__button border-neutral-400 rounded-xl bg-blue mx-[5px] my-[15px] px-[50px] py-[5px] w-[95%] text-white" type="submit">
                    <h1>Update</h1>
                </button>
            </form> 
        </section>
    )
}
