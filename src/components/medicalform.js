

const MedicalForm = () =>{
    return(
        <section>
            <form>
                <div>
                    <h1>Personal Medical Info</h1>
                <label>Gender</label>    
                <select>
                    <option value ="Male"/>
                    <option value ="Female"/>
                </select>
                <label>Blood Type</label>
                <select>
                    <option value="A+"/>
                    <option value="A-"/>
                    <option value="B+"/>
                    <option value="B-"/> 
                    <option value="O+"/> 
                    <option value="O-"/>
                    <option value="AB+"/> 
                    <option value="AB-"/>  
                </select>
                <label>Do you have any disability</label>
                <input name="disability" type ="radio" value="true"/> <label>Yes</label>
                <input name = "disabilty" type ="radio" value="false"/><label>No</label>
                </div>
                   
                <div>
                <h1>Medical History</h1>
                    <label>Do you have any allergy</label>
                <input name="disability" type ="radio" value="true"/> <label>Yes</label>
                <input name = "disabilty" type ="radio" value="false"/><label>No</label>
                <p>If yes please specify</p><input type= "text"/>
                <label>Chronic medical history or conditions</label>
                <select>
                    <option value="A+"/>
                    <option value="A-"/>
                    <option value="B+"/>
                    <option value="B-"/> 
                    <option value="O+"/> 
                    <option value="O-"/>
                    <option value="AB+"/> 
                    <option value="AB-"/>  
                </select>
                </div>
                <div>
                    <h1>Health Insurance</h1>
                    <input type ="text" placeholder="Health Insurance Provider"/>
                    <input type ="text" placeholder="Policy Number"/>
                </div>
                <input type ="submit" value="Finish"/>
            </form>
        </section>
    )
}


export default MedicalForm;
