ReactDOM.createRoot(document.querySelector('#root'))
    .render(<App />)


function App() {
    return (
        <div style={{
            border: '1px solid gray',
            borderRadius: '20px',
            boxShadow:  '5px 5px 5px gray',
            textAlign: 'center',
            width: '50%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            margin: 'auto',

        }}>
            <Pic />
            <Name />
            <Followers />
        </div>
    )
}

function Pic() {
    return (
        <div style={{
            marginTop: '20px',

        }}>
            <img className='pic' src='https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80' height='200px' />
        </div>
    )
}

function Name() {
    return (
        <div>
            <h2>Julienne Moore</h2>
            <p>Julienne.Moore@company.com</p>
        </div>
    )
}

function Followers() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'baseline'
        }}>
            <p><span><b>25</b></span><br />Posts</p>
            <p><span><b>350</b></span><br />Following</p>
            <p><span><b>1.5K</b></span><br />Followers</p>
        </div>
    )
}