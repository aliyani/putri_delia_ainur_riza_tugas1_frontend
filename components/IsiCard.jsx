import Rect from "react"
const IsiCard = (props) => {
    return (
        <div style={{ border: 'solid', padding: '20px', marginTop: '20px' }}>
            <img class="card-img-top" src="..." alt="Card image cap"></img>
            <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        </div>
    )
}
export default IsiCard