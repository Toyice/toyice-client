import AddTitle from "../add_title";
import Dropdown from "../dropdown";

const AddProjectType = () => {
    return (
        <div>
            <AddTitle isDot={true} bigTitle={'토이 프로젝트 유형'} smallTitle={'프로젝트의 유형을 선택해주세요.'} />
            <div>
                <Dropdown className='add-pj-type-dropdown'>태그를 선택해주세요.</Dropdown>
            </div>
        </div>
    );
}

export default AddProjectType;