import { IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import useNavigateMenu from "@/common/hooks/useNavigateMenu";

function MenuButton() {

    const handleNavigateMenu = useNavigateMenu((state) => state.setOpen)

    return(
        <IconButton 
            arial-label="menu" 
            size="large"
            onClick={handleNavigateMenu} 
        >
            <MenuIcon />
        </IconButton>
    )
}
export default MenuButton;