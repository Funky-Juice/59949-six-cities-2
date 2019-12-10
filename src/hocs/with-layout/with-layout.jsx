import Layout from '../../components/layout/layout';

const withLayout = (Component) => (
  (props) => (
    <Layout {...props}>
      <Component {...props}/>
    </Layout>
  )
);

export default withLayout;
