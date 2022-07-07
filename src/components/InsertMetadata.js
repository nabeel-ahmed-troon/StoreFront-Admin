import React from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import {
  InsertNftMetadata,
  InsertPrice,
  InsertSupplyCap,
  InsertNft,
} from "../NearProvider/utils";

const InsertMetadata = () => {
  const [tokenName, setTokenName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState("");
  const [collection_name, setCollection_Name] = useState("");

  const [price, setPrice] = useState(0);
  const [supplyCap, setSupplyCap] = useState(0);
  const [royality, setRoyality] = useState(0);

  const handleInsertMetadata = async () => {
    try {
      await InsertNftMetadata({
        tokenName: tokenName,
        title: title,
        description: description,
        media: media,
        collection_name: collection_name,
      });
    } catch (err) {
      alert(err);
    }
  };

  const handleInsertSupplyCap = async () => {
    try {
      await InsertSupplyCap({
        supplyCap: +supplyCap,
      });
    } catch (err) {
      alert(err);
    }
  };

  const handleInsertRoyalities = async () => {
    try {
      await InsertSupplyCap({
        royality: +royality,
      });
    } catch (err) {
      alert(err);
    }
  };

  const handleInsertPrice = async () => {
    try {
      await InsertPrice({
        tokenName: tokenName,
        price: price,
      });
    } catch (error) {
      alert(error);
    }
  };

  const handleInsertNft = async () => {
    try {
      await InsertPrice({
        tokenName: tokenName,
        price: price,
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              MetaData Insertion
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Insert nfts metadata here
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    onChange={(e) => setTokenName(e.target.value)}
                    placeholder="Enter Token Name"
                    label="Token Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter Title"
                    label="Title"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={(e) => setPrice(e.target.value)}
                    type=""
                    placeholder="Enter NFT Price"
                    label="NFT Price"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    onChange={(e) => setSupplyCap(e.target.value)}
                    type=""
                    placeholder="Enter Nft Supply"
                    label="NFT Supply"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setMedia(e.target.value)}
                    type=""
                    placeholder="Enter Media Url"
                    label="Media Url"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setCollection_Name(e.target.value)}
                    type=""
                    placeholder="Enter Collection Name"
                    label="Collection Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setRoyality(e.target.value)}
                    type=""
                    placeholder="Enter Nft Royality"
                    label="NFT Royality"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setDescription(e.target.value)}
                    label="Description"
                    multiline
                    rows={4}
                    placeholder="Enter Description"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
            </form>
            <Button
              // onClick={handleInsertMetadata}
              onClick={async () => {
                try {
                  await handleInsertMetadata();
                  await handleInsertPrice();
                  await handleInsertRoyalities();
                  await handleInsertSupplyCap();
                  alert("Successfully Inserted");
                } catch (error) {
                  alert("error");
                }
              }}
              variant="contained"
              color="primary"
              fullWidth
            >
              Submit
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Nft Price Insertion
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Below you can insert Nft Price
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    onChange={(e) => setTokenName(e.target.value)}
                    placeholder="Enter Token Name"
                    label="Token Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setPrice(e.target.value)}
                    type=""
                    placeholder="Enter NFT Price"
                    label="NFT Price"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setSupplyCap(e.target.value)}
                    type=""
                    placeholder="Enter Nft Supply"
                    label="NFT Supply"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
            </form>
            <Button
              onClick={handleInsertPrice}
              variant="contained"
              color="primary"
              fullWidth
            >
              Submit
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Nft Supply Cap Insertion
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Below you can insert Nft Supply
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    onChange={(e) => setTokenName(e.target.value)}
                    placeholder="Enter Token Name"
                    label="Token Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setSupplyCap(e.target.value)}
                    type=""
                    placeholder="Enter Nft Supply"
                    label="NFT Supply"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
            </form>
            <Button
              onClick={handleInsertSupplyCap}
              variant="contained"
              color="primary"
              fullWidth
            >
              Submit
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Nft Royality Insertion
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Below you can insert Nft Royality
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    onChange={(e) => setTokenName(e.target.value)}
                    placeholder="Enter Token Name"
                    label="Token Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setRoyality(e.target.value)}
                    type=""
                    placeholder="Enter Nft Royality"
                    label="NFT Royality"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
            </form>
            <Button
              onClick={handleInsertSupplyCap}
              variant="contained"
              color="primary"
              fullWidth
            >
              Submit
            </Button>
          </CardContent>
        </Card>
      </Grid>

      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Nft Insertion
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
            >
              Below you can insert Nft
            </Typography>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    onChange={(e) => setTokenName(e.target.value)}
                    placeholder="Enter Token Name"
                    label="Token Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) => setRoyality(e.target.value)}
                    type=""
                    placeholder="Enter Nft Royality"
                    label="NFT Royality"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
            </form>
            <Button
              onClick={InsertNft}
              variant="contained"
              color="primary"
              fullWidth
            >
              Submit
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default InsertMetadata;
