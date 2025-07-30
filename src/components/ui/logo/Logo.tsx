import { getImagePath } from '../../../utils/imagePath'

export const Logo = () => {
	return <img src={getImagePath('img/Logo.svg')} alt="YourBanK" />
}
