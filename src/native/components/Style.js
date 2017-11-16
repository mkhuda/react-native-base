export default {
  containermain: {
    flex: 1,
  },
  containerinner: {
    backgroundColor: 'transparent',
  },
  logincard: {
    marginVertical: 5,
    marginHorizontal: 2,
    flex: 1,
    borderWidth: 0,
    borderRadius: 8,
    borderColor: '#f2f2f2',
    flexWrap: 'nowrap',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 3,
    marginTop: 100,
  },
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  backgroundimage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  image: {
    width: 180,
    height: 50,
  },
};

