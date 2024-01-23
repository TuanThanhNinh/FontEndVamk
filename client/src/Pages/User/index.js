import useFetchPetsData from "../../customHooks/useFetchPetsData";
import DataTable from "../../Components/DataTable";

function UserPage() {
    const { petsData, err } = useFetchPetsData();

    return (
        <>
            {" "}
            <div>user Page</div>
            {petsData && <DataTable petsData={petsData} />}
        </>
    );
}

export default UserPage;
