import pandas as pd


def main():
    dataframe = pd.read_csv('heraldry_table.csv')  # convert to dataframe
    dataframe.fillna(value="", inplace=True)  # fill NaNs with empty strings
    dictionary = dataframe.to_dict(orient='records')  # convert to a dict
    out_string = "var heraldryTable = " + str(dictionary)  # put into a string

    f = open("heraldry_config.js", "w")
    f.write(out_string)  # write that string to a javascript file
    f.close()


if __name__ == "__main__":
    main()