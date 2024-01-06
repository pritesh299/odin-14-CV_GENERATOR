export  function Preform({title, hidden}) {
    return (
        <div className="preform">
            <h2>{title}</h2>
            {hidden ? <div className="">show</div> : <div className="">DO not show</div>}
        </div>
    );
}
