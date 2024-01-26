import { Size } from "../../../../../model/types";

interface ArtBlockProps {
    color: string;
    size: Size;
}

function ArtObjectClock({ color, size: { width, height } }: ArtBlockProps) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="100%" height="100%" fill="" />
            <path
                d="M17.3632 3.32935C18.2415 1.36712 20.2111 0 22.5 0C24.7889 0 26.7585 1.36712 27.6368 3.32935C29.3785 2.06915 31.7677 1.86999 33.75 3.01444C35.7322 4.15889 36.7544 6.32764 36.5339 8.46611C38.6724 8.24553 40.8413 9.26768 41.9857 11.25C43.1302 13.2323 42.931 15.6216 41.6708 17.3633C43.6329 18.2416 45 20.2111 45 22.5C45 24.7889 43.6329 26.7585 41.6707 27.6367C42.931 29.3785 43.1302 31.7678 41.9857 33.7502C40.8413 35.7324 38.6724 36.7546 36.5339 36.534C36.7544 38.6725 35.7322 40.8411 33.75 41.9856C31.7678 43.13 29.3785 42.9308 27.6368 41.6706C26.7585 43.6329 24.7889 45 22.5 45C20.2111 45 18.2415 43.6329 17.3632 41.6706C15.6215 42.9308 13.2322 43.13 11.25 41.9856C9.26773 40.8411 8.24558 38.6723 8.4661 36.5339C6.32758 36.7544 4.15874 35.7323 3.01426 33.75C1.8698 31.7677 2.06898 29.3784 3.32922 27.6367C1.36706 26.7584 0 24.7888 0 22.5C0 20.2111 1.36711 18.2415 3.32933 17.3632C2.069 15.6215 1.86977 13.2321 3.01426 11.2498C4.15874 9.26752 6.32758 8.24536 8.4661 8.46594C8.24567 6.32752 9.26782 4.15885 11.25 3.01443C13.2323 1.86999 15.6215 2.06915 17.3632 3.32935ZM22.5 2.8125C20.9467 2.8125 19.6875 4.07164 19.6875 5.62494C19.6875 5.62494 19.6882 5.65572 19.6931 5.71133C19.6985 5.77377 19.7079 5.85762 19.7231 5.96525C19.7537 6.1825 19.8026 6.45975 19.872 6.79836C20.0109 7.47636 20.2159 8.32228 20.4727 9.29178C20.9853 11.2276 21.6752 13.5485 22.3737 15.8005L22.5 16.2065L22.6263 15.8005C23.3248 13.5485 24.0147 11.2276 24.5273 9.29178C24.7841 8.32228 24.9891 7.47636 25.128 6.79836C25.1974 6.45975 25.2463 6.1825 25.2769 5.96525C25.2921 5.85762 25.3015 5.77377 25.3069 5.71133C25.3118 5.65561 25.3125 5.625 25.3125 5.625C25.3125 4.0717 24.0533 2.8125 22.5 2.8125ZM5.625 25.3125C5.625 25.3125 5.65561 25.3118 5.71133 25.3069C5.77377 25.3015 5.85762 25.2921 5.96525 25.2769C6.1825 25.2463 6.45975 25.1974 6.79836 25.128C7.47636 24.9891 8.32228 24.7841 9.29178 24.5273C11.2276 24.0147 13.5485 23.3248 15.8005 22.6263L16.2065 22.5L15.8005 22.3737C13.5485 21.6752 11.2276 20.9853 9.29178 20.4727C8.32228 20.2159 7.47636 20.0109 6.79836 19.872C6.45975 19.8026 6.1825 19.7537 5.96525 19.7231C5.85762 19.7079 5.77377 19.6985 5.71133 19.6931C5.65572 19.6882 5.62452 19.6875 5.62452 19.6875C4.07122 19.6875 2.8125 20.9467 2.8125 22.5C2.8125 24.0533 4.0717 25.3125 5.625 25.3125ZM25.3125 39.375C25.3125 39.375 25.3118 39.3444 25.3069 39.2887C25.3015 39.2262 25.2921 39.1424 25.2769 39.0348C25.2463 38.8175 25.1974 38.5403 25.128 38.2016C24.9891 37.5236 24.7841 36.6777 24.5273 35.7082C24.0147 33.7724 23.3248 31.4515 22.6263 29.1995L22.5 28.7935L22.3737 29.1995C21.6752 31.4515 20.9853 33.7724 20.4727 35.7082C20.2159 36.6777 20.0109 37.5236 19.872 38.2016C19.8026 38.5403 19.7537 38.8175 19.7231 39.0348C19.7079 39.1424 19.6985 39.2262 19.6931 39.2887C19.6882 39.3443 19.6875 39.3755 19.6875 39.3755C19.6875 40.9288 20.9467 42.1875 22.5 42.1875C24.0533 42.1875 25.3125 40.9283 25.3125 39.375ZM9.29191 33.3732C9.29191 33.3732 9.31808 33.3572 9.36388 33.3252C9.41524 33.2893 9.48315 33.2392 9.56876 33.1722C9.74159 33.0371 9.95728 32.8561 10.2158 32.6268C10.7335 32.1674 11.3636 31.5669 12.0748 30.8598C13.495 29.448 15.16 27.69 16.761 25.9591L17.0495 25.6467L16.6348 25.7404C14.3352 26.2614 11.9803 26.8245 10.0475 27.3484C9.07954 27.6108 8.24442 27.8562 7.5878 28.0749C7.25986 28.1841 6.99534 28.2804 6.79187 28.3625C6.69108 28.4032 6.61375 28.4369 6.55696 28.4635C6.50677 28.4869 6.47899 28.502 6.47899 28.502C5.1338 29.2787 4.67331 30.9985 5.44996 32.3437C6.22661 33.6889 7.94671 34.1498 9.29191 33.3732ZM12.6562 39.5499C14.0014 40.3265 15.7215 39.8656 16.4982 38.5204C16.4982 38.5204 16.513 38.4932 16.5365 38.4429C16.563 38.3861 16.5968 38.3088 16.6375 38.208C16.7196 38.0045 16.8159 37.74 16.9251 37.412C17.1438 36.7554 17.3892 35.9203 17.6516 34.9523C18.1755 33.0196 18.7385 30.6646 19.2596 28.3651L19.3532 27.9503L19.0409 28.2388C17.31 29.8398 15.552 31.5049 14.1402 32.925C13.4331 33.6362 12.8325 34.2663 12.3732 34.784C12.1438 35.0425 11.9629 35.2582 11.8277 35.4311C11.7608 35.5167 11.7107 35.5846 11.6748 35.6359C11.6403 35.6852 11.6266 35.7083 11.6266 35.7083C10.8499 37.0535 11.311 38.7732 12.6562 39.5499ZM38.5206 16.4982C39.8658 15.7215 40.3267 14.0014 39.55 12.6562C38.7734 11.311 37.0537 10.8499 35.7085 11.6266C35.7085 11.6266 35.6819 11.6428 35.6361 11.6748C35.5848 11.7107 35.5169 11.7608 35.4312 11.8277C35.2584 11.9629 35.0427 12.1438 34.7842 12.3732C34.2665 12.8325 33.6364 13.4331 32.9252 14.1402C31.505 15.552 29.84 17.31 28.239 19.0409L27.9505 19.3532L28.3652 19.2596C30.6648 18.7385 33.0197 18.1755 34.9525 17.6516C35.9205 17.3892 36.7556 17.1438 37.4122 16.9251C37.7401 16.8159 38.0047 16.7196 38.2081 16.6375C38.3089 16.5968 38.3863 16.563 38.443 16.5365C38.4935 16.513 38.5206 16.4982 38.5206 16.4982ZM32.3437 5.45013C30.9985 4.67348 29.2787 5.13397 28.502 6.47917C28.502 6.47917 28.4889 6.50263 28.4635 6.55713C28.4369 6.61392 28.4032 6.69125 28.3625 6.79204C28.2804 6.99551 28.1841 7.26003 28.0749 7.58797C27.8562 8.24459 27.6108 9.07971 27.3484 10.0477C26.8245 11.9805 26.2614 14.3354 25.7404 16.6349L25.6467 17.0497L25.9591 16.7612C27.69 15.1602 29.448 13.4951 30.8598 12.075C31.5669 11.3638 32.1674 10.7337 32.6268 10.216C32.8561 9.95745 33.0371 9.74176 33.1722 9.56894C33.2392 9.48332 33.2893 9.41542 33.3252 9.36405C33.3597 9.31476 33.3732 9.29208 33.3732 9.29208C34.1498 7.94688 33.6889 6.22678 32.3437 5.45013ZM39.375 25.3125C40.9283 25.3125 42.1875 24.0533 42.1875 22.5C42.1875 20.9467 40.9288 19.6875 39.3755 19.6875C39.3755 19.6875 39.3486 19.6879 39.2887 19.6931C39.2262 19.6985 39.1424 19.7079 39.0348 19.7231C38.8175 19.7537 38.5403 19.8026 38.2016 19.872C37.5236 20.0109 36.6777 20.2159 35.7082 20.4727C33.7724 20.9853 31.4515 21.6752 29.1995 22.3737L28.7935 22.5L29.1995 22.6263C31.4515 23.3248 33.7724 24.0147 35.7082 24.5273C36.6777 24.7841 37.5236 24.9891 38.2016 25.128C38.5402 25.1974 38.8175 25.2463 39.0348 25.2769C39.1424 25.2921 39.2262 25.3015 39.2887 25.3069C39.3444 25.3118 39.375 25.3125 39.375 25.3125ZM5.44996 12.6561C4.67331 14.0013 5.13421 15.7214 6.47941 16.498C6.47941 16.498 6.50642 16.5127 6.55696 16.5363C6.61375 16.5629 6.69108 16.5966 6.79187 16.6373C6.99534 16.7194 7.25986 16.8157 7.5878 16.9249C8.24442 17.1436 9.07954 17.389 10.0475 17.6514C11.9803 18.1753 14.3352 18.7384 16.6348 19.2594L17.0495 19.3531L16.761 19.0407C15.16 17.3098 13.495 15.5518 12.0748 14.14C11.3636 13.4329 10.7335 12.8324 10.2158 12.373C9.95728 12.1437 9.74159 11.9627 9.56877 11.8276C9.48315 11.7606 9.41525 11.7105 9.36388 11.6746C9.31816 11.6426 9.29186 11.6266 9.29186 11.6266C7.94666 10.85 6.22661 11.3109 5.44996 12.6561ZM11.6268 9.29208C11.6268 9.29208 11.6428 9.31834 11.6748 9.36405C11.7107 9.41541 11.7608 9.48332 11.8278 9.56894C11.9629 9.74176 12.1439 9.95745 12.3732 10.216C12.8326 10.7337 13.4331 11.3638 14.1402 12.075C15.552 13.4951 17.31 15.1602 19.0409 16.7612L19.3533 17.0497L19.2596 16.6349C18.7386 14.3354 18.1755 11.9804 17.6516 10.0477C17.3892 9.07971 17.1438 8.24459 16.9251 7.58797C16.8159 7.26003 16.7196 6.99551 16.6375 6.79204C16.5968 6.69125 16.5631 6.61392 16.5365 6.55713C16.513 6.50666 16.498 6.47917 16.498 6.47917C15.7213 5.13397 14.0015 4.67348 12.6563 5.45013C11.3111 6.22678 10.8502 7.94688 11.6268 9.29208ZM39.55 32.3439C40.3267 30.9987 39.8658 29.2786 38.5206 28.502C38.5206 28.502 38.4935 28.4872 38.443 28.4636C38.3863 28.4371 38.3089 28.4033 38.2081 28.3627C38.0047 28.2806 37.7401 28.1843 37.4122 28.075C36.7556 27.8563 35.9205 27.611 34.9525 27.3486C33.0197 26.8246 30.6648 26.2616 28.3652 25.7406L27.9505 25.6469L28.239 25.9593C29.84 27.6902 31.505 29.4481 32.9252 30.86C33.6364 31.5671 34.2665 32.1676 34.7842 32.6269C35.0427 32.8563 35.2584 33.0372 35.4312 33.1724C35.5168 33.2394 35.5848 33.2894 35.6361 33.3254C35.6816 33.3572 35.7081 33.3734 35.7081 33.3734C37.0533 34.15 38.7734 33.6891 39.55 32.3439ZM28.5018 38.5204C29.2785 39.8656 30.9986 40.3265 32.3438 39.5499C33.689 38.7732 34.1501 37.0535 33.3734 35.7083C33.3734 35.7083 33.3573 35.6818 33.3252 35.6359C33.2893 35.5846 33.2392 35.5167 33.1722 35.4311C33.0371 35.2582 32.8562 35.0426 32.6268 34.784C32.1675 34.2663 31.5669 33.6362 30.8598 32.925C29.448 31.5049 27.69 29.8398 25.9591 28.2388L25.6468 27.9503L25.7404 28.3651C26.2615 30.6646 26.8245 33.0196 27.3484 34.9523C27.6108 35.9203 27.8562 36.7554 28.0749 37.412C28.1841 37.74 28.2804 38.0045 28.3625 38.208C28.4032 38.3088 28.437 38.3861 28.4635 38.4429C28.4871 38.4935 28.5018 38.5204 28.5018 38.5204ZM22.5 26.7188C24.83 26.7188 26.7188 24.83 26.7188 22.5C26.7188 20.17 24.83 18.2812 22.5 18.2812C20.17 18.2812 18.2812 20.17 18.2812 22.5C18.2812 24.83 20.17 26.7188 22.5 26.7188Z"
                fill={color}
            />
        </svg>
    );
}

export default ArtObjectClock;
