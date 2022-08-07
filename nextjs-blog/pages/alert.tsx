import cn from 'classnames';
import Layout from '../components/layout';
import styles from '../styles/alert.module.css';

export default function Alert({ children, type }) {
    type = 'success';
    return (
        <Layout>
            <div
                className={cn({
                    [styles.success]: type === 'success',
                    [styles.error]: type === 'error'
                })}
            >
                {children}
            </div>
            <div className={cn({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error'
            })}>
                Alert
            </div>
        </Layout>
    )
}