import { IconClose, IconRightArrow } from 'components/Icons';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { useEffect } from 'react';
import {
  getBannerMessages,
  closeSingleBanner,
} from 'store/slices/bannerMessage';
import styles from './Banner.module.css';
import cx from 'classnames';

interface BannerProps {
  mode?: 'default' | 'overlay';
}

export const Banner = ({ mode = 'default' }: BannerProps) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.bannerMessage.isLoading);
  const bannerMessageItems = useAppSelector(
    (state) => state.bannerMessage.items
  );

  useEffect(() => {
    dispatch(getBannerMessages());
  }, [dispatch]);

  if (isLoading) {
    return null; //render nothing while loading
  }

  type NewType = {
    color: string;
    id: number;
    message: string;
    link: string;
    isActive?: boolean | undefined;
  }[];

  /**
   * It takes an array of strings and returns an array of objects with the same strings and a color
   * property
   * @returns An array of objects with the same properties as the original array, but with a new
   * property called color.
   */
  function generateNewDataWithColor(): NewType {
    const arr = ['#8857F0', '#F08557', '#125089'];
    const colors: string[] = [];
    const iter = Math.floor(bannerMessageItems.length / arr.length);

    for (let i = 0; i < iter; i++) {
      colors.push(...arr);
    }
    for (let i = 0; i < bannerMessageItems.length % arr.length; i++) {
      colors.push(arr[i]);
    }
    const result = bannerMessageItems.map((item, index) => {
      return { ...item, color: colors[index] };
    });

    return result;
  }

  return (
    <div
      className={cx(styles.bannerContainer, {
        [styles.bannerOverlay]: mode === 'overlay',
      })}
    >
      {generateNewDataWithColor()?.map((bannerMessage) => (
        <div
          className={styles.banner}
          key={bannerMessage?.id}
          style={{
            backgroundColor: bannerMessage?.color,
          }}
        >
          <div className={styles.bannerContent}>
            <a
              target="_blank"
              href={bannerMessage?.link}
              className={styles.bannerInfo}
            >
              <p>{bannerMessage?.message}</p>
              <IconRightArrow />
            </a>
          </div>
          <IconClose
            className={styles.iconClose}
            onClick={() => dispatch(closeSingleBanner(bannerMessage))}
          />
        </div>
      ))}
    </div>
  );
};
