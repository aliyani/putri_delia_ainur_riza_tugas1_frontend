
const Form = ()=>{
    return(
        <div>
            <h1>Resume</h1>
            <h2>Client</h2>
            <label htmlFor="nama">
                <input type="text" placeholder="nama" name="nama"/>
            </label><br/>
            <label htmlFor="alamat">
                <input type="text" placeholder="alamat" name="alamat"/>
            </label><br/>
            <label htmlFor="usia">
                <input type="text" placeholder="usia" name="usia"/>
            </label><br/>

            <h2>Riwayat</h2>
            <label htmlFor="Prestasi">
                <input type="text" placeholder="prestasi" name="prestasi"/>
            </label><br/>
            <label htmlFor="kontribusi">
                <input type="text" placeholder="kontribusi" name="kontribusi"/>
            </label><br/>
            <label htmlFor="penghargaan">
                <input type="text" placeholder="penghargaan" name="penghargaan"/>
            </label><br/>
            <button>Submit</button>
        </div>
    )
}
export default Form