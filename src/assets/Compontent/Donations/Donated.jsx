
const Donated = ({donations}) => {
    const[id,Titel]= donations();
    return (
        
        <div>
            <h1>Titel{donations.id}</h1>
        </div>
    );
};

export default Donated;