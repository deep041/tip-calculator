import './Tip.css';

function Tip(prop) {
    return(
        <div className='tip'>
            <span>{prop.title}</span>
            <div className='tip-grid'>
                {prop.tips.map((tip, i) => <div className='tip-div'> {tip !== 'Custom' ? tip + '%' : tip} </div> )}
            </div>
        </div>
    )
}

export default Tip;