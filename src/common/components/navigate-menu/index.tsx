import useNavigateMenu from '@/common/hooks/useNavigateMenu';
import s from './styles.module.css';

function NavigateMenu() {
    const isNavigateMenu: boolean = useNavigateMenu((state) => state.isOpen);
    console.log(isNavigateMenu)
    return (
        <>
            {isNavigateMenu
                ?
                <div className={s['container']}>
                    navigate menu
                </div>
                :
                <div className={s['empty-container']} />
            }
        </>
    )
}
export default NavigateMenu;