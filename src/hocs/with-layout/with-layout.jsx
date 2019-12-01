import Layout from '../../components/layout/layout';

const withLayout = (Component) => (
  (props) => (
    <Layout>
      <Component {...props}/>
    </Layout>
  )
);

export default withLayout;
