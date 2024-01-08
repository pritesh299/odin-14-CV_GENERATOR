export  function Preform({title, hidden}) {
    return (
        <div className="preform">
            <h3>{title}</h3>
            {hidden ? <div className="">show</div> : <div className="">DO not show</div>}
        </div>
    );
}
