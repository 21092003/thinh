function ViewPersonal(){
    var authParents = localStorage.getItem("authParents")
    if(authParents){
        authParents=JSON.parse(authParents);
        var nameParents =authParents.data.auth.name;
    }
    return(
        <div>{nameParents}</div>
    )
}
export default ViewPersonal;