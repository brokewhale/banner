import cx from 'classnames';
import { Button, Card, IconAdd, Title } from 'components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ReactComponent as Graph } from './graph.svg';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { getInterviewSummaries } from 'store/slices';

import styles from './Home.module.css';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const isLoading = useAppSelector((state) => state.interviewSummary.isLoading);
  const interviewSummaryItems = useAppSelector((state) => state.interviewSummary.items);

  useEffect(() => {
    dispatch(getInterviewSummaries());
  }, [dispatch])

  const handleCreateInterview = () => navigate('interviews');

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <p className={styles.welcomeMessage}>Welcome {user.name}</p>
      <div className={styles.layout}>
        <Card>
          <div className={styles.header}>
            <Title as='h2'>Open Interviews ({interviewSummaryItems.length})</Title>
            <Button buttonSize='sm' iconPrefix={<IconAdd />} onClick={handleCreateInterview}>
              Create Interview
            </Button>
          </div>
          <div>
            {interviewSummaryItems.map((interviewSummaryItem) => (
              <div className={styles.summaryContainer} key={interviewSummaryItem.id}>
                <Title as='h4'>{interviewSummaryItem.title}</Title>
                <p className={styles.team}>{interviewSummaryItem.team}</p>
                <div className={styles.itemContainer}>
                  <p className={styles.item}>
                    <span>Headcount</span>
                    <span className={styles.count}>{interviewSummaryItem.headcount}</span>
                  </p>
                  <p className={styles.item}>
                    <span>Total</span>
                    <span className={styles.count}>{interviewSummaryItem.total}</span>
                  </p>
                  <p className={styles.item}>
                    <span>In Progress</span>
                    <span className={styles.count}>{interviewSummaryItem.inProgress}</span>
                  </p>
                  <p className={styles.item}>
                    <span>Completed</span>
                    <span className={styles.count}>{interviewSummaryItem.completed}</span>
                  </p>
                  <p className={styles.item}>
                    <span>Hired</span>
                    <span className={styles.count}>{interviewSummaryItem.hired}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <div>
          <Card>
            <Title as='h2'>Total Candidate Results</Title>
            <div className={styles.graphContainer}>
              <Graph className={styles.graph} />
              <p className={styles.graphText}>
                <span className={styles.percent}>26%</span>
                <span>Completed</span>
              </p>
            </div>
            <div className={styles.legend}>
              <div className={styles.tagContainer}><div className={cx(styles.tag, styles.tagPassed)} />Passed</div>
              <div className={styles.tagContainer}><div className={cx(styles.tag, styles.tagProgress)} />In Progress</div>
              <div className={styles.tagContainer}><div className={cx(styles.tag, styles.tagFailed)} />Failed</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
