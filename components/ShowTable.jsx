const ShowTable = ({daftarNama})=>{
    return(
        <div>
            <table style={{border:"solid"}}>
                <thead>
                    <td>NAMA</td>
                    <td>Alamat</td>
                </thead>
                {daftarNama.map((daftar,indeks)=>
                <tr key={indeks}>
                    <td>
                        {daftar.nama}
                    </td>
                    <td>
                        {daftar.alamat}
                    </td>
                    </tr>
                )}
            </table>
        </div>
    )
}
export default ShowTable