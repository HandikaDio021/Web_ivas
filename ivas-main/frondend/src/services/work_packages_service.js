import http from "./http_common";

const getWorkPackagesList = async () => {  
  return new Promise(async (resolve, reject) => {
    try {
      const resp = await http.get(`/testdata`);      
      resolve("ok");
    } catch (error) {
      reject(error);
    }
  });
};

const WorkPackagesService = {
  getWorkPackagesList  
};

export default WorkPackagesService;
