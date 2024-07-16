import { FC, ReactNode } from 'react';
import styles from './PageContainer.module.css';

interface IProps {
  children: ReactNode;
  gap?: number;
}

export const PageContainer: FC<IProps> = ({ children, gap }) => {
  return (
    <div className={styles.root} style={{ gap }}>
      {children}
    </div>
  );
};
